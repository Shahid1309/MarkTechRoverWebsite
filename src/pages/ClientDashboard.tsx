import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Download, Image } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed' | 'in_progress';
  date: string;
}

interface Design {
  id: string;
  title: string;
  url: string;
  date: string;
}

interface Invoice {
  id: string;
  number: string;
  amount: number;
  date: string;
  status: 'paid' | 'pending';
}

const ClientDashboard = () => {
  const [tasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Website Design',
      description: 'Initial homepage design and layout',
      status: 'completed',
      date: '2024-03-15',
    },
    {
      id: '2',
      title: 'Content Integration',
      description: 'Adding content to all pages',
      status: 'in_progress',
      date: '2024-03-18',
    },
    {
      id: '3',
      title: 'SEO Optimization',
      description: 'Implementing SEO best practices',
      status: 'pending',
      date: '2024-03-20',
    },
  ]);

  const [designs] = useState<Design[]>([
    {
      id: '1',
      title: 'Homepage Design V1',
      url: '/designs/homepage-v1.jpg',
      date: '2024-03-15',
    },
    {
      id: '2',
      title: 'About Page Design',
      url: '/designs/about-page.jpg',
      date: '2024-03-18',
    },
  ]);

  const [invoices] = useState<Invoice[]>([
    {
      id: '1',
      number: 'INV-2024-001',
      amount: 1500,
      date: '2024-03-15',
      status: 'paid',
    },
    {
      id: '2',
      number: 'INV-2024-002',
      amount: 2000,
      date: '2024-03-20',
      status: 'pending',
    },
  ]);

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-400 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Section className="pt-32">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">Project Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Progress */}
            <div className="bg-background border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Project Progress</h2>
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="border border-border rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">{task.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {task.description}
                        </p>
                        <div className="flex items-center mt-2">
                          <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {task.date}
                          </span>
                        </div>
                      </div>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                          task.status
                        )}`}
                      >
                        {task.status === 'in_progress'
                          ? 'In Progress'
                          : task.status.charAt(0).toUpperCase() +
                            task.status.slice(1)}
                      </span>
                    </div>
                    {task.status === 'pending' && (
                      <Button
                        variant="secondary"
                        size="sm"
                        className="mt-3"
                        onClick={() => {
                          // TODO: Implement task approval
                        }}
                      >
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Approve Task
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Designs & Invoices */}
            <div className="space-y-8">
              {/* Designs */}
              <div className="bg-background border border-border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Design Files</h2>
                <div className="space-y-4">
                  {designs.map((design) => (
                    <div
                      key={design.id}
                      className="flex items-center justify-between p-4 border border-border rounded-lg"
                    >
                      <div className="flex items-center">
                        <Image className="h-5 w-5 mr-3 text-muted-foreground" />
                        <div>
                          <h3 className="font-medium">{design.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {design.date}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Invoices */}
              <div className="bg-background border border-border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Invoices</h2>
                <div className="space-y-4">
                  {invoices.map((invoice) => (
                    <div
                      key={invoice.id}
                      className="flex items-center justify-between p-4 border border-border rounded-lg"
                    >
                      <div>
                        <h3 className="font-medium">{invoice.number}</h3>
                        <p className="text-sm text-muted-foreground">
                          {invoice.date}
                        </p>
                        <p className="text-sm font-medium mt-1">
                          ${invoice.amount.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            invoice.status === 'paid'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                          }`}
                        >
                          {invoice.status.charAt(0).toUpperCase() +
                            invoice.status.slice(1)}
                        </span>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default ClientDashboard; 