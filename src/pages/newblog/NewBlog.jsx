import "./NewBlog.css";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {timeStamp} from "../../helpers/dateConverter.js";
import readTimer from "../../helpers/readTimer.js";


function NewBlog() {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        register("created");
        register("readTime");
        register("comments");
        register("shares");

        setValue("created", timeStamp());
        setValue("readTime", 0);
        setValue("comments", 0);
        setValue("shares", 0);
    }, [register, setValue]);

    const onSubmit = (data) => {
        const readingTime = readTimer(data.content);
        const updateReadTime = {...data, readTime: readingTime,
        };
        console.log(data);
        console.log(`finalDate = ${updateReadTime}`);
    };

    return (
        <div className="page-container">
            <h2>Begin hier met het maken van jouw nieuwe blog-post!</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label>Titel</label>
                    <input
                        type="text"
                        name="title"
                        {...register("title",{ required: true })}/>
                        {errors.title && <p className="errorMsg">{"Er is een titel nodig."}</p>}
                </div>
                <div className="form-control">
                    <label>Ondertitel</label>
                    <input
                        type="text"
                        name="subtitle"
                        {...register("subtitle",{ required: true })}/>
                        {errors.subtitle && <p className="errorMsg">{"Een ondertitel is nodig."}</p>}
                    </div>
                <div className="form-control">
                    <label>Auteur</label>
                    <input
                        type="text"
                        name="author"
                        {...register("author", { required: true })}/>
                        {errors.author && <p className="errorMsg">{"De naam van de auteur mag niet ontbreken."}</p>}
                </div>
                <div className="form-control">
                    <label>Blogpost</label>
                    <textarea
                        name="content"
                        minLength={300}
                        maxLength={2000}
                        rows={10}
                        cols={40}
                        {...register("content",{ required: true })}/>
                        {errors.content && <p className="errorMsg">{"Een verhaal / tekst is nodig."}</p>}
                </div>
                <div className="form-control">
                    <label></label>
                    <button type="submit">Create Blogpost</button>
                </div>
            </form>
        </div>
    )
        ;
}

export default NewBlog;

