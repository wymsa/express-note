import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const validateBody = (schema: Joi.Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const formattedErrors = error?.details.map((detail) => detail.message);
      const currentDate = new Date();
      const formattedDate = `${currentDate.toDateString()} | ${currentDate.toLocaleTimeString()}`;

      res.status(400).json({
        path: `${req.method} | ${req.path}`,
        timestamp: formattedDate,
        message: "Request validation error",
        details: formattedErrors,
      });
    } else {
      next();
    }
  };
};
