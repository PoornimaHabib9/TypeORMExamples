import { Column, ManyToMany } from "typeorm";
import { Base } from "./base";
import { Question } from "./Question";

// export class Quiz extends Base{
//     @ManyToMany(type=>Question,question=>question.quiz)
//     question:Question[]
// }