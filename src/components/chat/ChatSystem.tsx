import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send, Paperclip, Smile, Phone, Video, MoreHorizontal,
  Search, Filter, User, MessageSquare, Clock, Check,
  Image, File, Mic, MicOff, Volume2, VolumeX, X
} from 'lucide-react';
import Button from '../ui/Button';
import { ChatMessage, ChatRoom, User as UserType } from '../../types';

interface ChatSystemProps {
  currentUser: UserType;
  chatRooms: ChatRoom[];
  onSendMessage: (roomId: string, message: string, attachments?: File[]) => void;
  onMarkAsRead: (roomId: string) => void;
  onStartCall?: (roomId: string, type: 'audio' | 'video') => void;
}

const ChatSystem: React.FC<ChatSystemProps> = ({
  currentUser,
  chatRooms,
  onSendMessage,
  onMarkAsRead,
  onStartCall
}) => {
  const [selectedRoom, setSelectedRoom] = useState<ChatRoom | null>(null);
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Mock messages for demo
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      senderId: 'client1',
      senderName: 'Amit Kumar',
      senderRole: 'client',
      receiverId: 'admin1',
      message: 'Hi! When will the website be ready?',
      timestamp: '2024-03-25T15:30:00Z',
      isRead: false
    },
    {
      id: '2',
      senderId: 'admin1',
      senderName: 'Admin User',
      senderRole: 'admin',
      receiverId: 'client1',
      message: 'Hi Amit! The website is 75% complete. We\'re on track to deliver by April 15th as promised.',
      timestamp: '2024-03-25T15:32:00Z',
      isRead: true
    },
    {
      id: '3',
      senderId: 'client1',
      senderName: 'Amit Kumar',
      senderRole: 'client',
      receiverId: 'admin1',
      message: 'That\'s great! Can you send me a preview of the current design?',
      timestamp: '2024-03-25T15:35:00Z',
      isRead: false
    }
  ]);

  useEffect(() => {
    if (selectedRoom) {
      onMarkAsRead(selectedRoom.id);
      scrollToBottom();
    }
  }, [selectedRoom, messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!message.trim() && attachments.length === 0) return;
    if (!selectedRoom) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      senderId: currentUser.id,
      senderName: currentUser.name,
      senderRole: currentUser.role as 'admin' | 'client',
      receiverId: selectedRoom.participants.find(p => p !== currentUser.id) || '',
      message: message,
      timestamp: new Date().toISOString(),
      isRead: false,
      attachments: attachments.length > 0 ? attachments.map(f => f.name) : undefined
    };

    setMessages([...messages, newMessage]);
    onSendMessage(selectedRoom.id, message, attachments);
    setMessage('');
    setAttachments([]);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setAttachments([...attachments, ...files]);
  };

  const removeAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString();
    }
  };

  const filteredRooms = chatRooms.filter(room => {
    const clientName = 'Amit Kumar'; // This would come from actual client data
    return clientName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="h-full flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Client Chat</h2>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="sm">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Chat Rooms List */}
        <div className="w-80 border-r border-gray-200 flex flex-col">
          {/* Search */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Rooms List */}
          <div className="flex-1 overflow-y-auto">
            <AnimatePresence>
              {filteredRooms.map((room) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-100 ${
                    selectedRoom?.id === room.id ? 'bg-blue-50 border-r-2 border-blue-500' : ''
                  }`}
                  onClick={() => setSelectedRoom(room)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">AK</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-white truncate">Amit Kumar</h4>
                        {room.unreadCount > 0 && (
                          <div className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {room.unreadCount}
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-300 truncate">
                        {room.lastMessage?.message || 'No messages yet'}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {room.lastMessage ? formatTime(room.lastMessage.timestamp) : ''}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 flex flex-col">
          {selectedRoom ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">AK</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Amit Kumar</h4>
                      <p className="text-sm text-gray-300">TechCorp India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="secondary" 
                      size="sm"
                      onClick={() => onStartCall?.(selectedRoom.id, 'audio')}
                    >
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="sm"
                      onClick={() => onStartCall?.(selectedRoom.id, 'video')}
                    >
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="secondary" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                <div className="space-y-4">
                  {messages.map((msg, index) => {
                    const isOwnMessage = msg.senderId === currentUser.id;
                    const showDate = index === 0 || 
                      formatDate(messages[index - 1].timestamp) !== formatDate(msg.timestamp);
                    
                    return (
                      <div key={msg.id}>
                        {showDate && (
                          <div className="text-center mb-4">
                            <span className="bg-white px-3 py-1 rounded-full text-xs text-gray-500 border">
                              {formatDate(msg.timestamp)}
                            </span>
                          </div>
                        )}
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-xs lg:max-w-md ${isOwnMessage ? 'order-2' : 'order-1'}`}>
                            {!isOwnMessage && (
                              <p className="text-xs text-gray-500 mb-1 ml-2">{msg.senderName}</p>
                            )}
                            <div className={`p-3 rounded-lg ${
                              isOwnMessage 
                                ? 'bg-blue-500 text-white' 
                                : 'bg-white text-white border border-gray-200'
                            }`}>
                              <p className="text-sm">{msg.message}</p>
                              {msg.attachments && msg.attachments.length > 0 && (
                                <div className="mt-2 space-y-1">
                                  {msg.attachments.map((attachment, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs">
                                      <File className="h-3 w-3" />
                                      <span>{attachment}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                              <div className={`flex items-center justify-between mt-2 text-xs ${
                                isOwnMessage ? 'text-blue-100' : 'text-gray-500'
                              }`}>
                                <span>{formatTime(msg.timestamp)}</span>
                                {isOwnMessage && (
                                  <span className="flex items-center gap-1">
                                    {msg.isRead ? <Check className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200">
                {/* Attachments Preview */}
                {attachments.length > 0 && (
                  <div className="mb-3 flex flex-wrap gap-2">
                    {attachments.map((file, index) => (
                      <div key={index} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg">
                        <File className="h-3 w-3 text-gray-300" />
                        <span className="text-xs text-gray-400">{file.name}</span>
                        <button
                          onClick={() => removeAttachment(index)}
                          className="text-gray-500 hover:text-red-500"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  >
                    <Smile className="h-4 w-4" />
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button 
                    variant="accent" 
                    size="sm"
                    onClick={handleSendMessage}
                    disabled={!message.trim() && attachments.length === 0}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">Select a conversation</h3>
                <p className="text-gray-300">Choose a client to start chatting</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatSystem; 