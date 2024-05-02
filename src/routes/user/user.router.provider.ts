import express from "express";
import UserController from "../../controllers/users/user.controller";

const userController = new UserController();

export default class UserRouterProvider {

  exec(app: express.Application) {

    const router = express.Router();

    router.get("/users", async (req, res) => {
      try {
        const users = await userController.findAll();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
    });

    router.get("/users/:id", async (req, res) => {
      try {
        const user = await userController.findById(req.params.id);
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
    });

    app.use('/api', router);
  }
}
