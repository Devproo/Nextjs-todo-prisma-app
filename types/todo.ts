// export interface Todo {
//   id: string; // Prisma uses a string UUID
//   text: string;
//   completed: boolean;
// }



export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
 
}
