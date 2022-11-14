import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

const API_KEY = 'mxegx9zuesbv';
const client = StreamChat.getInstance(API_KEY);

function App() {
  return (
    <div className='app_wrapper'>
      <Chat client={client} theme='team light'>
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;
