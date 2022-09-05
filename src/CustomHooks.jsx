import { useState, useEffect } from 'react';
function FriendStatus() {
  return <div>-----------------</div>;
}
function useFriendStatus(id) {
  const [ isOnline, setIsOnline ] = useState(null);
  useEffect(() => {
    if (id > 1) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
    return () => {
      console.log(1111);
    }
  });
}
export default FriendStatus;
