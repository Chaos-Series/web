import axios from "axios"
import { useForm } from "react-hook-form";
import { Toaster, toast } from 'sonner'

import { Button } from "@nextui-org/react";

export default function Inscripciones() {

    const { register, handleSubmit } = useForm();

    let baseURL = "https://api.chaosseries.com/.netlify/functions/api/enviarcontacto";

    let config = {
        timeout: 10000,
        headers: { 'Content-Type': 'application/json' }
    };

    const onSubmit = data => {
        const datosArray = Object.values(data)

        let maximo = 0;
        let todoRelleno = true
        datosArray.forEach((dato, index) => {
            if (dato.length == 0) {
                maximo++
                todoRelleno = false
                if (maximo == 1) {
                    toast.error('Tienes que completar los datos')
                }
            } else if (todoRelleno == true && maximo == 0 && index == 3) {
                maximo++
                toast.promise(() => new Promise((resolve, reject) => {
                    axios.post(baseURL, data, config).then(function () {
                        resolve()
                    }).catch(function () {
                        reject()
                    })
                }), {
                    loading: 'Enviando mensaje',
                    success: 'Mensaje enviado',
                    error: 'Error. Contacta con administración',
                });
            }
        })
    };

    return (
        <>
            <div className="max-w-screen-xl py-16 mx-auto sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-2">
                <h1 className="text-5xl font-[800] mb-8">Contacto</h1>
                <h2>¿Quieres inscribirte como jugador para estar disponible en el mercado de fichajes?</h2>
                <h3>¡Rellena el formularo!</h3>
            </div>
            <form className="max-w-screen-xl pb-16 mx-auto sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex w-full justify-center gap-4">
                    <div className="flex flex-col">
                        <label>Nombre</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <i className="fa-solid fa-circle-user text-gray-500 dark:text-gray-400"></i>
                            </span>
                            <input type="text" placeholder="Nombre" {...register("nombre")} className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>

                    </div>
                    <div className="flex flex-col">
                        <label>Correo</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <i className="fa-solid fa-envelope text-gray-500 dark:text-gray-400"></i>
                            </span>
                            <input type="text" placeholder="Correo" {...register("correo")} className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                    </div>
                </div>


                <div className="flex flex-col w-[50%]">
                    <label>Asunto</label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <i className="fa-solid fa-question text-gray-500 dark:text-gray-400"></i>
                        </span>
                        <input type="text" placeholder="Asunto" {...register("asunto")} className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                </div>
                <div className="flex flex-col w-[50%]">
                    <label>Mensaje</label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <i className="fa-solid fa-comment text-gray-500 dark:text-gray-400"></i>
                        </span>
                        <textarea id="message" {...register("mensaje")} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-r-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mensaje"></textarea>
                    </div>
                </div>


                <Button color="primary" variant="faded" type="submit">
                    Enviar
                </Button>

            </form >
        </>
    )
}