FROM openjdk:11
VOLUME /tmp
EXPOSE 8080
ADD ./target/dscatalog-0.0.1-SNAPSHOT.jar dscatalog.jar
ENTRYPOINT ["java","-jar","/dscatalog.jar"]

# docker build -t dscatalog:v1 .

# HEROKU: docker run -p 80:8080 --name dscatalog-heroku1 -e CLIENT_ID=dscatalog -e CLIENT_SECRET=dscatalog123 -e JWT_SECRET=MY-JWT-SECRET -e JWT_DURATION=86400 -e DATABASE_URL=jdbc:postgresql://ec2-3-95-87-221.compute-1.amazonaws.com:5432/d93klrpvu4pemv?user=aaa"&"password=aaa dscatalog:v1

# AWS: docker run -p 80:8080 --name dscatalog-aws1 -e CLIENT_ID=dscatalog -e CLIENT_SECRET=dscatalog123 -e JWT_SECRET=MY-JWT-SECRET -e JWT_DURATION=86400 -e DATABASE_URL=jdbc:postgresql://dscatalog1.chd6j6286fo6.sa-east-1.rds.amazonaws.com:5432/dscatalog_db?user=postgres"&"password=aaa dscatalog:v1
