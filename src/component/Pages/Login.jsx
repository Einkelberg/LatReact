import FormLogin from "../Fragment/FormLogin";
import AuthLayout from "../Layout/AuthLayout";
export default function LoginPage({type}) {
  return (
    <>
      <AuthLayout type={"login"}>
        <FormLogin />
      </AuthLayout>
    </>
  );
}
