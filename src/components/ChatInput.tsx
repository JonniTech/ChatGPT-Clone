import { useState, KeyboardEvent } from 'react';
import { FiSend } from 'react-icons/fi';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

interface ChatInputProps {
    onSend: (message: string) => void;
    disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim() && !disabled) {
            onSend(message);
            setMessage('');
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="border-t bg-background p-4">
            <div className="max-w-3xl mx-auto flex gap-3 items-end">
                <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Send a message..."
                    disabled={disabled}
                    className="min-h-[60px] max-h-[200px] resize-none"
                    rows={1}
                />
                <Button
                    onClick={handleSend}
                    disabled={disabled || !message.trim()}
                    size="icon"
                    className="h-[60px] w-[60px] flex-shrink-0"
                >
                    <FiSend className="w-5 h-5" />
                </Button>
            </div>
        </div>
    );
}
