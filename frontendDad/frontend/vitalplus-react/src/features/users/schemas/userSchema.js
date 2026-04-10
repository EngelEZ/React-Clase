import {z} from "zod";

export const userSchema = z.object ({

    name: z
        .string()
        .min(3, "El nombre debe tener minimo 3 caracteres")
        .max(60, "El nombre es demasiado largo"),
    userEmail: z
        .string()
        .email("Debe ingresar su email valido"),

    phone: z
        .string()
        .regex(/^[0-9]{10}$/, "El telefono debe de tener 10 digitos"),

    documentType: z
        .string()
        .min(1, "Debe seleccionar un tipo de documento"),

    documentNumber: z
        .string()
        .min(5, "Numero de documento invalido")
        .max(20, "Numero de documento demasiado largo"),

    password: z
        .string()
        .min(8, "Contraseña debe tener minimo 8 caracteres"),
        // .regex(/[A-Z]/, "Debe contener al menos una mayuscula")
        // .min(/[a-z]/, "Debe contener al menos una minuscula")
        // .min(/[0-9]/, "Debe contener al menos un numero")
        // .min(/[^A-Za-z0-9]/, "Debe contener al menos un caracter especial"),

    avatarUrl: z
        .string()
        .url("La URL del avatar no es valida")
        .nullable()
        .optional()
    })


