FROM registry.aliyuncs.com/acs/node:7
WORKDIR /app
ADD . /app
RUN cnpm install
CMD ["node", "--harmony-async-await", "app.js"]
