import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "../components/Loading";
import { withRoomConsumer } from "../context";

const RoomContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      hello from room container
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
};

export default withRoomConsumer(RoomContainer);

// import React from "react";
// import RoomFilter from "./RoomFilter";
// import RoomList from "./RoomList";
// import Loading from "../components/Loading";
// import { RoomConsumer } from "../context";

// const RoomContainer = () => {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, sortedRooms, rooms } = value;

//         if (loading) {
//           return <Loading />;
//         }

//         return (
//           <div>
//             hello from room container
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// };

// export default RoomContainer;
