import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { Statistics } from "./Statistics/Statistics";
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../components/json/user.json';
import data from '../components/json/data.json';
import friends from '../components/json/friends.json';
import transactions from '../components/json/transactions.json';

export const App = () => {
  return (
    <div
      style={{
         display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        color: '#010101',
      }}
    >
   
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data}/>

      <FriendList friends={friends}/>

      <TransactionHistory items={transactions} />
    </div>
  );
};
    