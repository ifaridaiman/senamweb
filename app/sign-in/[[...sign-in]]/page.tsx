import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return(
    <div className='h-[80vh] flex justify-center items-center'>
      <SignIn forceRedirectUrl={"/dashboard"}/>
    </div>
  ) 
}