import "./NewBlog.css";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {timeStamp} from "../../helpers/dateConverter.js";
import readTimer from "../../helpers/readTimer.js";
import {pushNumberOne} from "../../helpers/apiScripts.js";
import {ArrowCircleRightIcon} from "@phosphor-icons/react";


/*temp text:
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ducimus fugit illum impedit ipsam laborum minus nesciunt perspiciatis porro possimus praesentium quae quibusdam reprehenderit, suscipit tempore tenetur vitae. A beatae blanditiis commodi consequuntur delectus dolor doloremque dolorum eius eum excepturi fugiat, harum id itaque maxime molestiae nobis numquam placeat quidem, quis quisquam rem, repellendus sed tempore? Ab blanditiis consequuntur corporis debitis excepturi ipsam iure, laboriosam laudantium molestiae officia, perspiciatis praesentium qui quidem quod reiciendis soluta tempora temporibus vel voluptate, voluptatibus. Ad alias atque delectus dignissimos eligendi esse eum eveniet ex exercitationem id impedit iure laboriosam laborum libero magnam magni modi nam nemo, nisi numquam placeat provident quas qui quia, quod reiciendis repellat, rerum sed sint tempora tenetur unde voluptas voluptatibus. Aliquid commodi ex perspiciatis reiciendis ullam! Atque culpa, ducimus eaque iure molestias obcaecati odio rerum tempore? Autem consequuntur cumque dolor dolorem doloremque doloribus ea esse eveniet ex expedita impedit iste iusto maiores, molestiae nostrum officiis optio perferendis placeat possimus praesentium quia quod reiciendis rem repellat, similique soluta suscipit tempora. Aperiam dolor ex exercitationem, minima officiis quam voluptate! Accusantium cum earum fugit laborum quis quos recusandae suscipit. Aliquid, aspernatur atque autem consequatur consequuntur delectus dolorem eius eligendi harum hic ipsum libero mollitia officiis pariatur porro ratione, rem reprehenderit, similique vel velit veniam voluptate voluptatibus? Dolor, ea, inventore. Earum nulla provident vitae! Animi, cumque in itaque laborum neque numquam officia perferendis perspiciatis quaerat quidem sequi velit voluptas voluptatibus. Architecto debitis quisquam rem? Adipisci aperiam, aspernatur at consequatur culpa dolore, ea eveniet expedita fuga fugit id ipsam itaque labore, magni maxime minima natus nihil nulla odio pariatur possimus praesentium quasi quis ratione similique sunt totam vero? Beatae dolorem necessitatibus nemo saepe? Ab aliquam beatae consectetur consequuntur cumque doloribus excepturi illo, itaque laudantium maiores maxime necessitatibus nobis placeat quaerat quam quod rem reprehenderit repudiandae sit tenetur ullam ut vitae voluptatibus. Aspernatur, consequatur deserunt error esse et nam ullam. Asperiores culpa cupiditate deleniti deserunt dolorem fuga quaerat, quasi qui repellendus rerum sed tempora temporibus vel voluptatem, voluptates. Accusamus cupiditate deserunt, eaque eligendi enim est hic ipsam iure iusto officiis provident ratione saepe sint! Adipisci asperiores corporis id iure laboriosam magnam perferendis, perspiciatis repellendus tempora tempore veritatis vero. Adipisci aliquid asperiores assumenda beatae commodi consequuntur corporis culpa, cum debitis delectus deserunt dicta dolor dolore dolorum enim eos est fugit hic in incidunt ipsum labore laboriosam laudantium mollitia nam nihil nostrum, officia officiis omnis perspiciatis provident qui sed tempore totam ullam velit voluptates. Ab aliquid amet aperiam asperiores blanditiis corporis cum delectus dolore dolorem doloribus ducimus eius expedita harum id inventore magni nam natus, numquam quam quidem quod reiciendis repellat sint sunt vel veniam voluptatibus voluptatum. Aperiam autem ducimus eveniet ex expedita, incidunt magnam modi perferendis reprehenderit vero vitae voluptas? Accusantium alias aliquid architecto atque beatae corporis, culpa debitis delectus deleniti dolorum earum eligendi exercitationem fuga in libero magnam modi nihil odit, officiis omnis optio possimus provident qui ratione recusandae reiciendis repellat saepe sapiente sed sunt tempore tenetur veritatis, vero? Ad adipisci blanditiis culpa cum dolorum eaque esse, est ex id laboriosam magnam minus modi molestias mollitia necessitatibus obcaecati officia perspiciatis quae quasi repellat repudiandae temporibus ullam vero? Ad aliquam amet aspernatur aut cum dicta dolorum, eum expedita impedit, porro quibusdam quis repellendus voluptates. Accusantium aliquam architecto, atque consectetur consequuntur dolore doloribus ducimus eos facilis fugit in ipsa iure iusto minus neque nihil nisi nostrum obcaecati omnis perspiciatis possimus quaerat quia quod ratione recusandae soluta ut. Ab beatae dicta ea earum error ipsam maiores minus molestias nobis officia possimus quod recusandae sequi similique temporibus veritatis vero, voluptatibus. Culpa cum, cumque deserunt quaerat quo sunt ut voluptates voluptatum!
    */


function NewBlog() {
    const {register, handleSubmit, setValue, formState: {errors}} = useForm();
    const [apiData, setApiData] = useState("0");
    const [error, setError] = useState("");
    const [loading, toggleLoading] = useState(false);


    useEffect(() => {
        register("created");
        register("readTime");
        register("comments");
        register("shares");
    }, [register]);


    const onSubmit = (data) => {
        const standardizedData = {
        ...data,
        created: timeStamp(),
        readTime: readTimer(data.content),
        comments: 0,
        shares: 0,
        }
        pushNumberOne(standardizedData, setError, setApiData, toggleLoading);
    };


    return (
        <div className="page-container">
            {loading && <p>Post versturen...</p>}
            {apiData?.id > 0 &&
                <div className="page-container">
                    <h2>De blogpost is succesvol toegevoegd.</h2>
                    <Link className="post-link" to={`/post/${apiData.id}`}>Je kunt deze hier bekijken<ArrowCircleRightIcon size={26}/></Link>
                </div>}
            {apiData.length > 0 &&
                <div className="page-container">
                    <h2>Begin hier met het maken van jouw nieuwe blog-post!</h2>
                    {error && <h2 className="error">{error}</h2>}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label>Titel</label>
                            <input
                                type="text"
                                name="title"
                                {...register("title", {required: true})}/>
                            {errors.title && <p className="errorMsg">{"Er is een titel nodig."}</p>}
                        </div>
                        <div className="form-control">
                            <label>Ondertitel</label>
                            <input
                                type="text"
                                name="subtitle"
                                {...register("subtitle", {required: true})}/>
                            {errors.subtitle && <p className="errorMsg">{"Een ondertitel is nodig."}</p>}
                        </div>
                        <div className="form-control">
                            <label>Auteur</label>
                            <input
                                type="text"
                                name="author"
                                {...register("author", {required: true})}/>
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
                                {...register("content", {required: true})}/>
                            {errors.content && <p className="errorMsg">{"Een verhaal / tekst is nodig."}</p>}
                        </div>
                        <div className="form-control">
                            <label></label>
                            <button type="submit">Create Blogpost</button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
        ;
}

export default NewBlog;

