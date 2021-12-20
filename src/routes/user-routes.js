const Router = require("express").Router;

const userController = require("../controllers/user-controller");

const authMiddleware = require("../middleware/auth-middleware");

const UserRouter = Router();

//? se puede poner el middleware aqui
UserRouter.use(authMiddleware);
UserRouter.get("/", userController.getUsers);
UserRouter.get("/:userId", userController.getUserDetails);
UserRouter.post("/sign-up", userController.createUser);
UserRouter.patch("/:userId", userController.updateUser);
UserRouter.delete("/:userId", userController.deleteUser);

module.exports = UserRouter;
