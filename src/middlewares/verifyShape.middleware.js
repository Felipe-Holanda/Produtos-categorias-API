export const verifyShapedMiddleware = (schema) => {
    return async (req, res, next) => {
        if (req.body.category_id) req.body.category = req.body.category_id
        const data = {
            ...req.body,
            ...req.params,
        }
        try {
            await schema.validate(data, { abortEarly: false, stripUnknown: true })
            req.validatedData = data
            return next()
        } catch (error) {
            return res.status(404).json({ message: error.message })
        }
    }
}

export const verifyOverShapedMiddleware = (schema) => {
    return async (req, res, next) => {
        if (req.body.category_id) req.body.category = req.body.category_id
        const data = {
            ...req.body,
            ...req.params,
        }
        try {
            await schema.validate(data, { abortEarly: false, stripUnknown: true })
            req.validatedData = data
            return next()
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
}