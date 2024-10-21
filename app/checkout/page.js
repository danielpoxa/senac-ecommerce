"use client";

import { useState, useEffect } from "react";
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
    boletoNumber: "",
    pixKey: "",
  });

  const [cartItems, setCartItems] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const userId = "USER_ID_AQUI"; // Substitua por um ID real

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`/api/cart?userId=${userId}`);
        if (!response.ok) {
          throw new Error('Erro ao buscar itens do carrinho');
        }
        const data = await response.json();
        setCartItems(data);

        // Calcule o valor total dos itens do carrinho
        const total = data.reduce((acc, item) => acc + item.productId.price * item.quantity, 0);
        setTotalValue(total);
      } catch (error) {
        console.error("Erro ao buscar itens do carrinho:", error);
      }
    };

    fetchCartItems();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handlePostalCodeChange = async (e) => {
    const { value } = e.target;
    setFormValues({ ...formValues, postalCode: value });

    if (value.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);
        const data = await response.json();

        if (!data.erro) {
          setFormValues((prevValues) => ({
            ...prevValues,
            address: data.logradouro,
            neighborhood: data.bairro,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkoutData = {
      ...formValues,
      cartItems,
    };

    // Aqui você pode enviar o checkoutData para uma API de finalização
    console.log("Compra finalizada com os dados:", checkoutData);
  };

  return (
    <Container maxWidth="lg" className={styles.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper className={styles.paper}>
            <Typography className={styles.title}>
              Detalhes de Faturamento
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {/* Campos de informações do cliente */}
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
                {/* Campos de endereço */}
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
                <Grid item xs={12}>
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
                <Grid item xs={12}>
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
                <Grid item xs={12}>
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
                <Grid item xs={12}>
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
                {/* Outros campos do formulário omitidos para brevidade... */}
              </Grid>

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
                </RadioGroup>
              </FormControl>

              {/* Campos do cartão apenas se o método de pagamento for cartão */}
              {formValues.paymentMethod !== "boleto" && formValues.paymentMethod !== "pix" && (
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Número do Cartão"
                      name="cardNumber"
                      variant="outlined"
                      className={styles.textField}
                      value={formValues.cardNumber}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Validade (MM/AA)"
                      name="cardExpiry"
                      variant="outlined"
                      className={styles.textField}
                      value={formValues.cardExpiry}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Nome no Cartão"
                      name="cardHolder"
                      variant="outlined"
                      className={styles.textField}
                      value={formValues.cardHolder}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
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
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Número de Parcelas"
                      name="installments"
                      type="number"
                      variant="outlined"
                      className={styles.textField}
                      value={formValues.installments}
                      onChange={handleInputChange}
                    />
                  </Grid>
                </Grid>
              )}

              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
              >
                Finalizar Compra
              </Button>
            </form>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper className={styles.paper}>
            <Typography variant="h6">Resumo do Pedido</Typography>
            <Divider sx={{ margin: "20px 0" }} />
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <Box key={item.productId.id} sx={{ display: "flex", justifyContent: "space-between", marginBottom: 1 }}>
                  <Typography>{item.productId.name} (x{item.quantity})</Typography>
                  <Typography>
                    R$ {(item.productId.price * item.quantity).toFixed(2)}
                  </Typography>
                </Box>
              ))
            ) : (
              <Typography>Nenhum item no carrinho</Typography>
            )}
            <Divider sx={{ margin: "20px 0" }} />
            <Typography variant="h6" sx={{ display: "flex", justifyContent: "space-between" }}>
              Total: <span>R$ {totalValue.toFixed(2)}</span>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
