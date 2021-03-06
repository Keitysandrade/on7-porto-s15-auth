require('dotenv-safe').config();


const express = require("express");
const router = express.Router();
const controller = require("../controllers/tarefasController");
const SECRET = "MIICWgIBAAKBgGgXOIVwNsv7S/FMeeIPwa72g5S6MO1SBXvOEViwYo3ByfMuqRxpvUi36VqTepqWy9nOj6IQluCyL813wUAvplEARGRFAMra5RyUJkWYuwIZF8/dHj63NSVyf0feRBJbEHUVx1zzNsSA3NvFEux0FaH5vI6yfWTuVAgfJY7xt8E5AgMBAAECgYAF1W9UgzJ/AimCb4/RLKLlRGmhd0Hwuw0VoDn2p4QOf9Lqry3JKt/x6GTKr8NKULNCFMKWCan7E+F7+X86MrF2fBPiCjTe/JhDWUcnmfB2YeUtk1pSnxxlc507PfKErxZa0kmdZCN0pBGsj0JvrgbkCo16qBIhmjOCLHpRtospEQJBAMW3CiCGo2Lo99VHNBdG6Y4DwDDNB5tmOqdYlFdnmpejoDW2HgGeF6dFXSZ2iSpABUq++YulrJmQDB1MeJ0wf9UCQQCGxqKxEFbmghtMdlItvfP/J+RsaVUePxdmQDha5VF5Y3ypXIefhDmQTwQFEW0Svp3RAhS6A1W2Ukp486wv1HVAkALztSyAJh9bcBvYmNACKImMx8lSvlrVH2oROgHGE7pQ4Jr8sZz/kcXXFMl2upyNYSbZDBvIKPgP/QZQ9noOV9JAkAc0dDsR/AtLlkkCpEcEuhgAWnI/OUkqJ0aUlVCegDbh3DJGDPE7XQzqHNthMg6+2V/p16YS+K+VYxdlscV6HNZAkBu4LDgef5nNVxGR1Eo7KGkEamkJsQQp1/6CmRzAdA9AZTWF4Z+Bpzz/GX17iI+/iGHtcokUgfIB7Lrp52QKahm"

router.get("/", controller.getAll);
router.get("/tarefas", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.postTarefa);
router.delete("/:id", controller.deleteTarefa);
router.delete("/", controller.deleteTarefaConcluida);
router.put("/:id", controller.putTarefa);

module.exports = router;
