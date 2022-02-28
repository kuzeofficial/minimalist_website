import { useState, useEffect } from "react";
import { Post } from "../../typings";
import { useForm, SubmitHandler } from "react-hook-form";
import { CheckCircleIcon } from "@heroicons/react/outline";
interface IFormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
}
interface Props {
  post: Post;
}
export const CommentBlog = ({ post }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    await fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => {
        setLoading(false);
        setSubmitted(true);
        localStorage.setItem(`${post._id}`, "commented");
      })
      .catch((error) => {
        setLoading(false);
        setSubmitted(false);
      });
  };
  useEffect(() => {
    const commented = localStorage.getItem(`${post._id}`);
    if (commented === "commented") {
      setSubmitted(true);
    }
  }, [post._id]);
  return (
    <>
      {submitted ? (
        <div className="flex flex-col items-center justify-center text-center">
          <CheckCircleIcon className="w-10 h-10 text-support-60" />
          <h1 className="mb-4 text-xl font-bold text-support-60">
            Thank you for your comment
          </h1>
        </div>
      ) : (
        <form
          className="flex flex-col py-5 px-1 max-w-[640px] w-full mx-auto mb-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="text-sm text-support-50">Enjoyed this article?</h3>
          <h4 className="mb-5 text-3xl font-bold dark:text-primary-10">
            Leave a comment below!
          </h4>
          {/* <hr className="py-3 mt-2" /> */}
          <input
            {...register("_id")}
            type="hidden"
            name="_id"
            value={post._id}
          />
          <label className="block mb-5">
            <span className="text-primary-80 dark:text-primary-50">Name</span>
            <input
              {...register("name", { required: true, maxLength: 30 })}
              placeholder="Maikel Remen"
              className="block w-full px-3 py-2 mt-1 border rounded shadow form-input dark:bg-primary-80 dark:border-primary-70 dark:text-primary-10 focus:ring-support-40 focus:ring-2 focus:outline-none "
              type="text"
            />
          </label>
          <label className="block mb-5">
            <span className="text-primary-80 dark:text-primary-50">Email</span>
            <input
              {...register("email", { required: true, maxLength: 30 })}
              placeholder="maikel@verification.com"
              className="block w-full px-3 py-2 mt-1 border rounded shadow form-input dark:bg-primary-80 dark:border-primary-70 dark:text-primary-10 focus:ring-support-40 focus:ring-2 focus:outline-none "
              type="email"
            />
          </label>
          <label className="block mb-0">
            <span className="text-primary-80 dark:text-primary-50">
              Comment
            </span>
            <textarea
              {...register("comment", { required: true, maxLength: 120 })}
              placeholder="Say something!"
              className="block w-full px-3 py-2 mt-1 border rounded shadow form-textarea dark:bg-primary-80 dark:border-primary-70 dark:text-primary-10 focus:ring-support-40 focus:ring-2 focus:outline-none "
              rows={8}
            />
          </label>
          {/* errors will return when field validation fails */}
          <div className="flex flex-col px-2 py-5">
            {errors.name && (
              <p className="text-red-500">-The Name Field is required</p>
            )}
            {errors.email && (
              <p className="text-red-500">-The Email Field is required</p>
            )}
            {errors.comment && (
              <p className="text-red-500">-The Comment Field is required</p>
            )}
          </div>
          <button
            type="submit"
            className="flex flex-row justify-center px-4 py-2 font-bold text-white rounded shadow cursor-pointer bg-support-50 hover:bg-support-40 focus:shadow-outline focus:outline-none"
          >
            {loading && (
              <svg
                className="w-5 h-auto mr-3 -ml-1 text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            {loading ? "Sending" : "Send"}
          </button>
        </form>
      )}
    </>
  );
};
