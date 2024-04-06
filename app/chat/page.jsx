"use client"
import { useState, useRef } from 'react';
// import { MicrophoneIcon, TrashIcon } from '@heroicons/react/solid'; // Убедитесь, что установили пакет @heroicons/react

export default function Home() {
  const [currentDialogId, setCurrentDialogId] = useState(null);
  const [dialogs, setDialogs] = useState({});
  const [input, setInput] = useState('');
  const audioRef = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage = { text: input, sender: 'user', timestamp: new Date().toISOString() };
      const updatedDialog = dialogs[currentDialogId]
        ? [...dialogs[currentDialogId], newMessage]
        : [newMessage];
      setDialogs({ ...dialogs, [currentDialogId]: updatedDialog });
      // Заглушка для ответа бота
      setDialogs((prevDialogs) => ({
        ...prevDialogs,
        [currentDialogId]: [...prevDialogs[currentDialogId], { text: 'Ответ бота', sender: 'bot', timestamp: new Date().toISOString() }],
      }));
      setInput('');
    }
  };

  const startNewDialog = () => {
    const newDialogId = Date.now().toString();
    setCurrentDialogId(newDialogId);
    setDialogs({ ...dialogs, [newDialogId]: [] });
  };

  const selectDialog = (dialogId) => {
    setCurrentDialogId(dialogId);
  };

  const deleteDialog = (dialogId) => {
    const { [dialogId]: _, ...rest } = dialogs;
    setDialogs(rest);
  };

  const recordAudio = () => {
    // Функция для начала записи аудио
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-200 border-r border-gray-300">
        <div className="p-4">
          <button onClick={startNewDialog} className="mb-4 p-2 bg-blue-500 text-white rounded-lg w-full">Новый диалог</button>
          <ul>
            {Object.keys(dialogs).map((dialogId) => (
              <li key={dialogId} className="flex justify-between items-center p-2 hover:bg-gray-300 cursor-pointer">
                <span onClick={() => selectDialog(dialogId)}>Диалог {dialogId}</span>
                <TrashIcon onClick={() => deleteDialog(dialogId)} className="h-5 w-5 text-red-500" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-grow flex flex-col">
        <div className="flex-grow overflow-auto p-4">
          {dialogs[currentDialogId]?.map((message, index) => (
            <div key={index} className={`flex mb-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-white shadow'}`}>
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex-shrink-0 p-4 flex items-center">
          <button onClick={recordAudio} className="p-2 rounded-full bg-red-500 text-white mr-2">
            <MicrophoneIcon className="h-6 w-6" />
          </button>
          <form onSubmit={sendMessage} className="flex-grow">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Введите сообщение..."
              className="w-full p-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
