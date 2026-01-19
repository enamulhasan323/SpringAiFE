import './App.css';
import React, {useState} from 'react';
import ChatComponents from './components/ChatComponents';
import RecipeComponents from './components/RecipeComponents';
import ImageGenerator from './components/ImageGenerator';
import AudioTranscriber from './components/AudioTranscriber';

function App() {
  const [activeTab, setActiveTab] = useState('image-generator');

    const handleTabChange = (tab) => {

      // alert(`Switching to ${tab} tab`);
      setActiveTab(tab);
    };

  return (
    <div className="App">
      <button className= {activeTab === 'image-generator' ? 'active' : ''}
      onClick={() => handleTabChange('image-generator')}>
        Image Generator
        </button>
      <button className= {activeTab === 'chat' ? 'active' : ''}
      onClick={() => handleTabChange('chat')}>
        Ask AI
        </button>
      <button className= {activeTab === 'recipe-generator' ? 'active' : ''}
      onClick={() => handleTabChange('recipe-generator')}>
        Recipe Generator
        </button>
      <button className= {activeTab === 'audio-transcriber' ? 'active' : ''}
      onClick={() => handleTabChange('audio-transcriber')}>
        Audio Transcriber
        </button>
      <div>
        {activeTab === 'image-generator' && <ImageGenerator/>}
        {activeTab === 'chat' && <ChatComponents/>}
        {activeTab === 'recipe-generator' && <RecipeComponents/>}
        {activeTab === 'audio-transcriber' && <AudioTranscriber/>}
      </div>
    </div>
  );
}

export default App;
