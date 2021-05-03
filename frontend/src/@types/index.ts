export interface UserData {
  img: string;
  name: string;
  xp: number;
  themeName: string;
  completedCount: number;
  failedCount: number;
  startedCount: number;
  canceledCount: number;
  ranking: number;
}

export interface Challenge {
  type: string,
  description: string,
  xp: number,
}

// export interface ApiUserData {
//   id: string,
//   google_id: string,
//   name: string,
//   email: string,
//   img: string,
//   xp: number,
//   themeName: string,
//   completedCount: number,
//   failed_count: number,
//   started_count: number,
//   canceled_count: number
// }