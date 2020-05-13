FROM nginx
RUN mkdir /workspace
COPY dist /workspace/dist
COPY nginx.conf /etc/nginx/nginx.conf

