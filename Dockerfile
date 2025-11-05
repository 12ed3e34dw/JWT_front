
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
ENV PORT=4200
ENV NODE_ENV=production
EXPOSE 4200
CMD ["npm", "run", "start", "--", "-p", "4200"]
