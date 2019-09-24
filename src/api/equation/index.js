import { Router } from 'express';

const equationRouter = new Router();

equationRouter.get('/quadratic', function(request, response){

    const a = request.body.a;
    const b = request.body.b;
    const c = request.body.c;
    
    const d = b*b - 4*a*c;
    if (d < 0) {
        response.send("Дане рівняння дійсних коренів не має.");
        return;
    }
    if (d == 0) {
        const x = -b/(2*a);
        response.send({message: "Рівняння має один кратний корінь: " + x});
        return;
    }

    const x1 = (-b-Math.sqrt(d))/(2*a);
    const x2 = (-b+Math.sqrt(d))/(2*a);
    response.send({ x1, x2, x : request.query.x });
});

export default equationRouter;