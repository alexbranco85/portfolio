const { authOptions } = require("@/app/api/auth/[...nextauth]/route")
const { getServerSession } = require("next-auth");
import {redirect} from "next/navigation"

export const checkAuth = async () => {
  const session = await getServerSession(authOptions);
  if(!session){
    redirect('/login')
  }
}