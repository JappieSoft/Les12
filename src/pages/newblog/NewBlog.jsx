import "./NewBlog.css";
import {useForm} from 'react-hook-form';

function NewBlog() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    console.log(`errors ${errors}`);

    return (
        <div className="page-container">
            <h1>Begin hier met het maken van jouw nieuwe blog-post!</h1>


            <form onSubmit={() => handleSubmit(onSubmit)}>
                <input {...register('firstName')} />
                <input {...register('lastName', { required: true })} />
                {errors.lastName && <p>Last name is required.</p>}
                <input {...register('age', { pattern: /\d+/ })} />
                {errors.age && <p>Please enter number for age.</p>}
                <input type="submit" />
            </form>


            <form onSubmit={() => handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        {...register("email", {
                            required: "Email is required."
                        })}
                    />
                    {errors.email && <p className="errorMsg">{errors.email.message}</p>}
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        {...register("password", {
                            required: true,
                            })}
                    />
                    {errors.password?.type === "required" && (
                        <p className="errorMsg">Password is required.</p>
                    )}
                    {errors.password?.type === "checkLength" && (
                        <p className="errorMsg">
                            Password should be at-least 6 characters.
                        </p>
                    )}
                </div>
                <div className="form-control">
                    <label></label>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
        ;
}

export default NewBlog;