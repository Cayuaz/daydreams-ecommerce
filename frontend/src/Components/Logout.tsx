import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { useNavigate } from "react-router-dom";

//Função que remove o token e o id do usuário do localStorage
const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <span className="text-sm text-(--secondary-color)">
          Finalizar sessão
        </span>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm" className="sm:w-full bg-(--primary-color)">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white">
            Você tem certeza?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-(--secondary-color)">
            Você será desconectado da sua conta e precisará fazer login
            novamente para acessar seus dados.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleLogout}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Logout;
