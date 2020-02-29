const express = require('express');
const {
  handlers: { errorHandler, notFoundHandler, createHandler },
  errors: { BadRequestError, CustomError }
} = require('custom-error-exceptions');

const app = express();
const port = 3044;
app.use(express.json());


//TEMPLATE BAD REQUEST ERROR 
app.post('/', (req, res) => {
  const name = req.body.name;
  if (typeof name !== 'string') {
    throw new BadRequestError();
  }
  res.send(
    req.body
  );
});

//TEMPLATE BAD REQUEST ERROR WITH CUSTOM MESSAGE
app.post('/custom-message', (req, res) => {
  const name = req.body.name;
  if (typeof name !== 'string') {
    throw new BadRequestError('Name type must be string');
  }
  res.send(req.body);
});

//CUSTOM ERROR
app.post('/custom-error', (req, res) => {
  const name = req.body.name;
  if (typeof name !== 'string') {
    throw new CustomError('Name type must be string', 'DATA_TYPE_NOT_VALID', 700);
  }
  res.send(req.body);
});


//SAMPLE HOW TO USE UnhandledRejection HANDLER for async router
const getName = async (req, res) => {
  /*some asynchronous logic here
    example :
    const nameFromDb = await getDataFromDb(req.body.id);
  */
  
  const id = req.body.id;
  res.send({
    id,
    nameFromDb: 'John Doe'
  })
}

app.post(
  '/unhandled-rejection', 
  createHandler(getName)
);
//END OF UnhandledRejection HANDLER

//Not found handler
app.use(notFoundHandler);
//Error Handler
app.use(errorHandler);

app.listen(port, () => console.log(`app listen on port ${port}`));