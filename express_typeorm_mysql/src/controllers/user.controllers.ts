import { Request, Response } from "express";


class UserController {

    constructor() {

    }

    getAll = (req: Request, res: Response) => {
        return res.json({ status: 'OK' })
    }
}

const userController = new UserController();

export default userController;