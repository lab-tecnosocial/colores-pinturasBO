library(tidyverse)
library(jsonlite)
tabla <- read_csv("paletas_pinturasBO.csv")
lista <- tabla %>%
  nest(pal = starts_with("pal"))

toJSON(lista)
