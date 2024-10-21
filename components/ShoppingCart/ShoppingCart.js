"use client";
import { Box, Typography, IconButton, Button } from "@mui/material";
import Popover from "@mui/material/Popover";

export default function Carrinho({
  itemsInCart,
  setItemsInCart,
  addToCart,
  open,
  anchorEl,
  setAnchorEl,
}) {
  const removeFromCart = (id) => {
    const updatedItems = itemsInCart
      .map((item) => {
        if (item.id === id) {
          item.quantity -= 1;
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    setItemsInCart(updatedItems);
  };

  const handleRemove = (id) => {
    const updatedItems = itemsInCart.filter((item) => item.id !== id);
    setItemsInCart(updatedItems);
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={() => setAnchorEl(null)}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: 350,
          maxHeight: 400,
          overflowY: "auto",
          backgroundColor: "#f5f5f5",
          borderRadius: 2,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          p: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Carrinho
        </Typography>
        {itemsInCart.length === 0 ? (
          <Typography>Seu carrinho está vazio.</Typography>
        ) : (
          <Box>
            {itemsInCart.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 2,
                  backgroundColor: "#fff",
                  padding: 2,
                  borderRadius: 2,
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  mr={2}
                >
                  <IconButton
                    onClick={() => addToCart(item)}
                    sx={{
                      width: 30,
                      height: 30,
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                      "&:hover": { backgroundColor: "#e0e0e0" },
                    }}
                  >
                    <img
                      src="/icons8-mais-24.png"
                      alt="Adicionar"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </IconButton>
                  <Typography align="center" my={1}>
                    {item.quantity}
                  </Typography>
                  <IconButton
                    onClick={() => removeFromCart(item.id)}
                    sx={{
                      width: 30,
                      height: 30,
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                      "&:hover": { backgroundColor: "#e0e0e0" },
                    }}
                  >
                    <img
                      src="/icons8-menos-48.png"
                      alt="Subtrair"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </IconButton>
                </Box>

                <Box display="flex" alignItems="center">
                  <Box
                    component="img"
                    src={item.imageUrl}
                    alt={item.name}
                    sx={{
                      width: 50,
                      height: 50,
                      objectFit: "cover",
                      borderRadius: 1,
                    }}
                  />
                  <Box ml={2}>
                    <Typography variant="body1" fontWeight="bold">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      R$ {item.price.toFixed(2)}
                    </Typography>
                  </Box>
                </Box>

                <IconButton
                  onClick={() => handleRemove(item.id)}
                  sx={{
                    marginLeft: "auto",
                    width: 30,
                    height: 30,
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    "&:hover": { backgroundColor: "#e0e0e0" },
                  }}
                >
                  <img
                    src="/icons8-multiplicação-32.png"
                    alt="Remover"
                    style={{ width: "100%", height: "100%" }}
                  />
                </IconButton>
              </Box>
            ))}
            <Typography
              sx={{
                marginTop: 2,
                fontWeight: "bold",
                textAlign: "right",
              }}
            >
              Total: R${" "}
              {itemsInCart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                marginTop: 2,
                backgroundColor: "#ff0000",
                "&:hover": { backgroundColor: "#e60000" },
              }}
            >
              Finalizar Compra
            </Button>
          </Box>
        )}
      </Box>
    </Popover>
  );
}
