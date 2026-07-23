#imagen base
FROM python:3.12-slim

#carpeta de trabajo
WORKDIR /app

#copiar solo requerimientos
COPY requirements.txt ./

# instalar dependencias7
RUN pip install --no-cache-dir -r requirements.txt

#copiar el resto
COPY . .
EXPOSE 5000

CMD ["python","app.py"]