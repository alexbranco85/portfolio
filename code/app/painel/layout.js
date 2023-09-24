const { getServerSession } = require("next-auth")
const { authOptions } = require("../api/auth/[...nextauth]/route");
const { redirect } = require("next/navigation");

const PrivateLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);

  if(!session){
    redirect('/login')
  }

  return <>{ children }</>
}

export default PrivateLayout;