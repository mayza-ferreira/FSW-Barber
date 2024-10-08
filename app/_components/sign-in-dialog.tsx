import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import Image from "next/image"
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"

const SignInDialog = () => {
  const handleLoginWithGoogleClick = () => signIn("google")
  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça login na plataforma</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta do Google
        </DialogDescription>
      </DialogHeader>
      <Button
        variant="outline"
        className="gap-2 rounded-xl font-bold"
        onClick={handleLoginWithGoogleClick}
      >
        <Image
          src="/google.svg"
          alt="Fazer login com o Google"
          height={18}
          width={18}
        />
        Goolge
      </Button>
    </>
  )
}

export default SignInDialog
