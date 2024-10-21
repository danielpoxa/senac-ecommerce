"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Divider,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import styles from "./checkout.module.css"; // Importando o CSS

export default function CheckoutPage() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    addressNumber: "",
    addressComplement: "",
    addressReference: "",
    neighborhood: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    paymentMethod: "visa",
    cardNumber: "",
    cardExpiry: "",
    cardHolder: "",
    cardSecurityCode: "",
    installments: 1,
    rg: "",
    cpf: "",
    birthDate: "",
    paymentType: "avista", // Novo estado para o tipo de pagamento

    boletoNumber: "",      // Novo campo para número do boleto
    pixKey: "",            // Novo campo para chave Pix

    boletoNumber: "", // Novo campo para número do boleto
    pixKey: "", // Novo campo para chave Pix

  });

  const [totalValue] = useState(100); // Exemplo de valor total da compra

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handlePostalCodeChange = async (e) => {
    const { value } = e.target;
    setFormValues({ ...formValues, postalCode: value });

    



    // Verifica se o CEP tem 8 dígitos
    if (value.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);
        const data = await response.json();

        

        // Verifica se o CEP retornou um endereço válido
        if (!data.erro) {
          setFormValues((prevValues) => ({
            ...prevValues,
            address: data.logradouro,
            neighborhood: data.bairro, // Adiciona o bairro
            city: data.localidade,
            state: data.uf,
          }));
        } else {
          alert("CEP não encontrado. Verifique o número e tente novamente.");
        }
      } catch (error) {
        console.error("Erro ao buscar dados do CEP:", error);
      }
    }
  };

  const handlePaymentTypeChange = (e) => {
    const { value } = e.target;
    setFormValues({ ...formValues, paymentType: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para finalizar a compra pode ser adicionada aqui
    console.log("Compra finalizada com os dados:", formValues);
  };

  return (
    <Container maxWidth="lg" className={styles.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper className={styles.paper}>

            <Typography className={styles.title}>Detalhes de Faturamento</Typography>

            <Typography className={styles.title}>
              Detalhes de Faturamento
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nome Completo"
                    name="firstName"
                    variant="outlined"
                    className={styles.textField}
                    value={formValues.firstName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Sobrenome"
                    name="lastName"
                    variant="outlined"
                    className={styles.textField}
                    value={formValues.lastName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    variant="outlined"
                    className={styles.textField}
                    value={formValues.email}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Endereço"
                    name="address"
                    variant="outlined"
                    className={styles.textField}
                    value={formValues.address}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Número"
                    name="addressNumber"
                    variant="outlined"
                    className={styles.textField}
                    value={formValues.addressNumber}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Complemento"
                    name="addressComplement"
                    variant="outlined"
                    className={styles.textField}
                    value={formValues.addressComplement}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Referência"
                    name="addressReference"
                    variant="outlined"
                    className={styles.textField}
                    value={formValues.addressReference}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Bairro"
                    name="neighborhood"
                    variant="outlined"
                    className={styles.textField}
                    value={formValues.neighborhood}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Cidade"
                    name="city"
                    variant="outlined"
                    className={styles.textField}
                    value={formValues.city}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Estado"
                    name="state"
                    variant="outlined"
                    className={styles.textField}
                    value={formValues.state}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="País"
                    name="country"
                    variant="outlined"
                    className={styles.textField}
                    value={formValues.country}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="CEP"
                    name="postalCode"
                    variant="outlined"
                    className={styles.textField}
                    value={formValues.postalCode}
                    onChange={handlePostalCodeChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="RG"
                    name="rg"
                    variant="outlined"
                    className={styles.textField}
                    value={formValues.rg}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="CPF"
                    name="cpf"
                    variant="outlined"
                    className={styles.textField}
                    value={formValues.cpf}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Data de Nascimento"
                    name="birthDate"
                    type="date"
                    variant="outlined"
                    className={styles.textField}
                    value={formValues.birthDate}
                    onChange={handleInputChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>

              
              <Divider sx={{ margin: "20px 0" }} />
              <Typography className={styles.title} sx={{ marginTop: 3 }}>Forma de Pagamento</Typography>
              <FormControl component="fieldset" sx={{ marginBottom: 2 }}>
                <FormLabel component="legend">Escolha seu método de pagamento</FormLabel>


              <Divider sx={{ margin: "20px 0" }} />
              <Typography className={styles.title} sx={{ marginTop: 3 }}>
                Forma de Pagamento
              </Typography>
              <FormControl component="fieldset" sx={{ marginBottom: 2 }}>
                <FormLabel component="legend">
                  Escolha seu método de pagamento
                </FormLabel>

                <RadioGroup
                  name="paymentMethod"
                  value={formValues.paymentMethod}
                  onChange={handleInputChange}
                >

                  <FormControlLabel value="visa" control={<Radio />} label="Visa" />
                  <FormControlLabel value="mastercard" control={<Radio />} label="MasterCard" />
                  <FormControlLabel value="amex" control={<Radio />} label="American Express" />
                  <FormControlLabel value="diners" control={<Radio />} label="Diners Club" />
                  <FormControlLabel value="elo" control={<Radio />} label="Elo" />
                  <FormControlLabel value="pix" control={<Radio />} label="Pix" />
                  <FormControlLabel value="boleto" control={<Radio />} label="Boleto" />
=======
                  <FormControlLabel
                    value="visa"
                    control={<Radio />}
                    label="Visa"
                  />
                  <FormControlLabel
                    value="mastercard"
                    control={<Radio />}
                    label="MasterCard"
                  />
                  <FormControlLabel
                    value="amex"
                    control={<Radio />}
                    label="American Express"
                  />
                  <FormControlLabel
                    value="diners"
                    control={<Radio />}
                    label="Diners Club"
                  />
                  <FormControlLabel
                    value="elo"
                    control={<Radio />}
                    label="Elo"
                  />
                  <FormControlLabel
                    value="pix"
                    control={<Radio />}
                    label="Pix"
                  />
                  <FormControlLabel
                    value="boleto"
                    control={<Radio />}
                    label="Boleto"
                  />

                </RadioGroup>
              </FormControl>

              {/* Seção de Cartão de Crédito */}

              {formValues.paymentMethod === "visa" || formValues.paymentMethod === "mastercard" || formValues.paymentMethod === "amex" || formValues.paymentMethod === "diners" || formValues.paymentMethod === "elo" ? (
                <Box>
                  <Typography variant="h6">Dados do Cartão de Crédito</Typography>

              {formValues.paymentMethod === "visa" ||
              formValues.paymentMethod === "mastercard" ||
              formValues.paymentMethod === "amex" ||
              formValues.paymentMethod === "diners" ||
              formValues.paymentMethod === "elo" ? (
                <Box>
                  <Typography variant="h6">
                    Dados do Cartão de Crédito
                  </Typography>

                  <TextField
                    fullWidth
                    label="Número do Cartão"
                    name="cardNumber"
                    variant="outlined"
                    className={styles.textField}
                    value={formValues.cardNumber}
                    onChange={handleInputChange}
                  />
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Data de Validade"
                        name="cardExpiry"
                        variant="outlined"
                        className={styles.textField}
                        value={formValues.cardExpiry}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Código de Segurança"
                        name="cardSecurityCode"
                        variant="outlined"
                        className={styles.textField}
                        value={formValues.cardSecurityCode}
                        onChange={handleInputChange}
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    fullWidth
                    label="Nome do Titular"
                    name="cardHolder"
                    variant="outlined"
                    className={styles.textField}
                    value={formValues.cardHolder}
                    onChange={handleInputChange}
                  />
                  <TextField
                    fullWidth
                    label="Número de Parcelas"
                    name="installments"
                    variant="outlined"
                    className={styles.textField}
                    type="number"
                    value={formValues.installments}
                    onChange={handleInputChange}
                    inputProps={{ min: 1 }}
                  />
                </Box>
              ) : null}

              {/* Seção de Boleto */}
              {formValues.paymentMethod === "boleto" ? (
                <Box>
                  <Typography variant="h6">Dados do Boleto</Typography>
                  <TextField
                    fullWidth
                    label="Número do Boleto"
                    name="boletoNumber"
                    variant="outlined"
                    className={styles.textField}
                    value={formValues.boletoNumber}
                    onChange={handleInputChange}
                  />
                </Box>
              ) : null}

              {/* Seção de Pix */}
              {formValues.paymentMethod === "pix" ? (
                <Box>
                  <Typography variant="h6">Dados do Pix</Typography>
                  <TextField
                    fullWidth
                    label="Chave Pix"
                    name="pixKey"
                    variant="outlined"
                    className={styles.textField}
                    value={formValues.pixKey}
                    onChange={handleInputChange}
                  />
                </Box>
              ) : null}

              <Divider sx={{ margin: "20px 0" }} />
              <Typography variant="h5" sx={{ marginBottom: 2 }}>
                Valor Total: R$ {totalValue}
              </Typography>
              <Button type="submit" variant="contained" color="primary">
                Finalizar Compra
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
