FROM node:18.12.1

WORKDIR /caller8413bot
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9001

# what a joke LOL
ENTRYPOINT ["npm", "run", "docker"] 