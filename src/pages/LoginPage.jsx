import { useForm } from "react-hook-form";
import { Link,useNavigate } from "react-router-dom";
import AuthButton from "../components/Button";


function LoginPage() {
    const { register, handleSubmit, errors } = useForm();
    const Navigate = useNavigate()

    const onSubmit = (data) => {
        const {email,password} = data;
        // we get the users from localstorage and put it to stored users
        const storedUsers = JSON.parse(localStorage.getItem("users"));

        // check in the array that the email is match and that user exist
        const user = storedUsers.find((user)=>user.email===email);

        if(!user){
          console.log("email error")  
          return;
        }

        if(user.password === password){
            console.log("user logged in successfully")
            Navigate('/UserHome')
        }

    };

    return (
        <section className='w-full'>
            <div className="w-full h-screen bg-cover bg-image">
                <div className="parts flex flex-col justify-center items-center w-full h-full">
                    <div className=" h-1/2 flex flex-col justify-center items-center text-3xl text-center text-[#ffffff] font-bold">
                        <h2>Movies</h2>
                        <p>Welcome! This is a movie streaming platform</p>
                    </div>
                    <div className="relative  md:w-2/5 ">
                        <div className="absolute inset-0 bg-black opacity-50 blur-md"></div>
                        <div className="relative z-10 flex flex-col justify-evenly w-full h-full items-center border-[#6aadaf] border-4 rounded-lg bg-opacity-50 bg-gray-800 p-8">
                            <form className="form-section  flex flex-col justify-evenly w-full h-full items-center" action="">
                            <div className="form-field">
                                    <input className="input-field" type="email" name="email" id="email" placeholder="Enter your email" autoComplete="off"
                                        {...register("email", { required: true })}
                                    />
                                    {(errors && errors.email) && <p className="text-red-500">Enter your email</p>}
                                </div>
                                <div className="form-field">
                                    <input className="input-field" type="password" name="password" id="password" placeholder="Enter your password" autoComplete="off"
                                        {...register("password", { required: true })}
                                    />
                                    {(errors && errors.password) && <p className="text-red-500">Enter your password</p>}
                                </div>
                                <p className='text-white'>Forgot password?</p>
                                <div className="btns w-full flex justify-evenly">
                                    <AuthButton label="Login" className="log-btn border-none transpa w-24 bg-[#687c78] rounded-md" onClick={handleSubmit(onSubmit)} />
                                    <Link to="/Signup"><AuthButton label="Sign Up" className="sig-btn border-none w-24 bg-[#687c78] rounded-md" /> </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginPage;
