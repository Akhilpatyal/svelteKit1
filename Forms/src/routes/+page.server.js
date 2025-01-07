import * as db from '$lib/server/database.js';

export function load({cookies}){

}

export const action={
   default: async ({cookies, request})=>{
    const data=await request.formData();
    db.createTodo(cookies.get('userid'), data.get('name'));
   }
}