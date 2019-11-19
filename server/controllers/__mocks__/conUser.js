// const users = {
//   1: {username: ['erin']},
//   2: {username: ['anu']},
//   3: {username: ['kanye']}
// };

// export default function user(url) {
//   return new Promise((resolve, reject) => {
//     const userID = parseInt(url.substr('/users/'.length), 10);
//     process.nextTick(() =>
//       users[userID]
//         ? resolve(users[userID])
//         : reject({
//             error: 'User with ' + userID + ' not found.',
//           }),
//     );
//   });
// }