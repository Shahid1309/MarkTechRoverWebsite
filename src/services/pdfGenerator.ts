import jsPDF from 'jspdf';
import 'jspdf-autotable';

export interface PDFData {
  invoiceNumber?: string;
  proposalNumber?: string;
  quotationNumber?: string;
  clientName: string;
  clientEmail: string;
  clientAddress?: string;
  issueDate: string;
  dueDate?: string;
  validUntil?: string;
  items: PDFItem[];
  subtotal: number;
  tax: number;
  total: number;
  currency: 'INR' | 'USD';
  notes?: string;
  terms?: string;
  title?: string;
  description?: string;
}

export interface PDFItem {
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

export class PDFGenerator {
  private doc: jsPDF;
  private companyInfo = {
    name: 'MarkTechRover',
    tagline: 'Digital Marketing & Web Development Agency',
    address: 'Mumbai, Maharashtra, India',
    phone: '+91 98765 43210',
    email: 'hello@marktechrover.com',
    website: 'www.marktechrover.com',
    logo: '/logo.png'
  };

  constructor() {
    this.doc = new jsPDF();
  }

  private addHeader() {
    // Company Logo and Info
    this.doc.setFontSize(24);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(59, 130, 246); // Blue color
    this.doc.text(this.companyInfo.name, 20, 30);
    
    this.doc.setFontSize(12);
    this.doc.setFont('helvetica', 'normal');
    this.doc.setTextColor(107, 114, 128); // Gray color
    this.doc.text(this.companyInfo.tagline, 20, 40);
    this.doc.text(this.companyInfo.address, 20, 50);
    this.doc.text(`Phone: ${this.companyInfo.phone}`, 20, 60);
    this.doc.text(`Email: ${this.companyInfo.email}`, 20, 70);
    this.doc.text(`Website: ${this.companyInfo.website}`, 20, 80);
  }

  private addClientInfo(data: PDFData) {
    this.doc.setFontSize(14);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(17, 24, 39); // Dark gray
    this.doc.text('Bill To:', 120, 30);
    
    this.doc.setFontSize(12);
    this.doc.setFont('helvetica', 'normal');
    this.doc.text(data.clientName, 120, 40);
    this.doc.text(data.clientEmail, 120, 50);
    if (data.clientAddress) {
      this.doc.text(data.clientAddress, 120, 60);
    }
  }

  private addDocumentInfo(data: PDFData, type: 'invoice' | 'proposal' | 'quotation') {
    const yPos = 100;
    
    this.doc.setFontSize(16);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(17, 24, 39);
    
    let documentNumber = '';
    switch (type) {
      case 'invoice':
        documentNumber = data.invoiceNumber || '';
        this.doc.text('INVOICE', 20, yPos);
        break;
      case 'proposal':
        documentNumber = data.proposalNumber || '';
        this.doc.text('PROPOSAL', 20, yPos);
        break;
      case 'quotation':
        documentNumber = data.quotationNumber || '';
        this.doc.text('QUOTATION', 20, yPos);
        break;
    }

    this.doc.setFontSize(12);
    this.doc.setFont('helvetica', 'normal');
    this.doc.text(`Date: ${new Date(data.issueDate).toLocaleDateString()}`, 120, yPos);
    
    if (documentNumber) {
      this.doc.text(`Number: ${documentNumber}`, 120, yPos + 10);
    }
    
    if (data.dueDate) {
      this.doc.text(`Due Date: ${new Date(data.dueDate).toLocaleDateString()}`, 120, yPos + 20);
    }
    
    if (data.validUntil) {
      this.doc.text(`Valid Until: ${new Date(data.validUntil).toLocaleDateString()}`, 120, yPos + 20);
    }
  }

  private addItemsTable(data: PDFData) {
    const yPos = 140;
    
    // Table headers
    const headers = [['Description', 'Quantity', 'Unit Price', 'Amount']];
    
    // Table data
    const tableData = data.items.map(item => [
      item.description,
      item.quantity.toString(),
      `${data.currency} ${item.unitPrice.toLocaleString()}`,
      `${data.currency} ${item.amount.toLocaleString()}`
    ]);

    // Add totals row
    tableData.push([
      '',
      '',
      'Subtotal:',
      `${data.currency} ${data.subtotal.toLocaleString()}`
    ]);
    
    if (data.tax > 0) {
      tableData.push([
        '',
        '',
        'Tax (18%):',
        `${data.currency} ${data.tax.toLocaleString()}`
      ]);
    }
    
    tableData.push([
      '',
      '',
      'Total:',
      `${data.currency} ${data.total.toLocaleString()}`
    ]);

    (this.doc as any).autoTable({
      startY: yPos,
      head: headers,
      body: tableData,
      theme: 'grid',
      headStyles: {
        fillColor: [59, 130, 246],
        textColor: 255,
        fontStyle: 'bold'
      },
      styles: {
        fontSize: 10,
        cellPadding: 5
      },
      columnStyles: {
        0: { cellWidth: 80 },
        1: { cellWidth: 25, halign: 'center' },
        2: { cellWidth: 35, halign: 'right' },
        3: { cellWidth: 35, halign: 'right' }
      }
    });
  }

  private addNotesAndTerms(data: PDFData) {
    const currentY = (this.doc as any).lastAutoTable.finalY + 20;
    
    if (data.notes) {
      this.doc.setFontSize(12);
      this.doc.setFont('helvetica', 'bold');
      this.doc.text('Notes:', 20, currentY);
      
      this.doc.setFontSize(10);
      this.doc.setFont('helvetica', 'normal');
      const notesLines = this.doc.splitTextToSize(data.notes, 170);
      this.doc.text(notesLines, 20, currentY + 10);
    }
    
    if (data.terms) {
      const termsY = data.notes ? currentY + 30 : currentY;
      this.doc.setFontSize(12);
      this.doc.setFont('helvetica', 'bold');
      this.doc.text('Terms & Conditions:', 20, termsY);
      
      this.doc.setFontSize(10);
      this.doc.setFont('helvetica', 'normal');
      const termsLines = this.doc.splitTextToSize(data.terms, 170);
      this.doc.text(termsLines, 20, termsY + 10);
    }
  }

  private addFooter() {
    const pageHeight = this.doc.internal.pageSize.height;
    
    this.doc.setFontSize(10);
    this.doc.setFont('helvetica', 'normal');
    this.doc.setTextColor(107, 114, 128);
    this.doc.text('Thank you for your business!', 20, pageHeight - 30);
    this.doc.text('For any queries, please contact us at hello@marktechrover.com', 20, pageHeight - 20);
  }

  generateInvoice(data: PDFData): jsPDF {
    this.doc = new jsPDF();
    
    this.addHeader();
    this.addClientInfo(data);
    this.addDocumentInfo(data, 'invoice');
    this.addItemsTable(data);
    this.addNotesAndTerms(data);
    this.addFooter();
    
    return this.doc;
  }

  generateProposal(data: PDFData): jsPDF {
    this.doc = new jsPDF();
    
    this.addHeader();
    this.addClientInfo(data);
    this.addDocumentInfo(data, 'proposal');
    
    // Add proposal title and description
    if (data.title) {
      this.doc.setFontSize(16);
      this.doc.setFont('helvetica', 'bold');
      this.doc.text(data.title, 20, 140);
    }
    
    if (data.description) {
      this.doc.setFontSize(12);
      this.doc.setFont('helvetica', 'normal');
      const descLines = this.doc.splitTextToSize(data.description, 170);
      this.doc.text(descLines, 20, 160);
    }
    
    this.addItemsTable(data);
    this.addNotesAndTerms(data);
    this.addFooter();
    
    return this.doc;
  }

  generateQuotation(data: PDFData): jsPDF {
    this.doc = new jsPDF();
    
    this.addHeader();
    this.addClientInfo(data);
    this.addDocumentInfo(data, 'quotation');
    
    // Add quotation title and description
    if (data.title) {
      this.doc.setFontSize(16);
      this.doc.setFont('helvetica', 'bold');
      this.doc.text(data.title, 20, 140);
    }
    
    if (data.description) {
      this.doc.setFontSize(12);
      this.doc.setFont('helvetica', 'normal');
      const descLines = this.doc.splitTextToSize(data.description, 170);
      this.doc.text(descLines, 20, 160);
    }
    
    this.addItemsTable(data);
    this.addNotesAndTerms(data);
    this.addFooter();
    
    return this.doc;
  }

  // Utility method to download PDF
  downloadPDF(doc: jsPDF, filename: string) {
    doc.save(filename);
  }

  // Utility method to get PDF as blob
  getPDFBlob(doc: jsPDF): Blob {
    return doc.output('blob');
  }
}

export default PDFGenerator; 