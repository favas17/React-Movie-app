import * as Yup from "yup"

export const  Yupval = Yup.object({
    title:Yup.string().required("Tiitle is required"),
    cast: Yup.string().required("Cast is required"),
    description: Yup.string().required("discription is required"),
    image:Yup.string().required("Image is required"),
    trailer:Yup.string().required("trailer link is required"),
})