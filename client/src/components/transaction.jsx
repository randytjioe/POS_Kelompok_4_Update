import { useEffect, useState } from "react";
import axios from "axios";
import {
  Flex,
  Image,
  InputGroup,
  InputRightElement,
  Input,
  InputRightAddon,
  List,
  ListItem,
  Divider,
  Button,
  Grid,
  GridItem,
  Icon,
  Center,
  IconButton,
  Slide,
  Text,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import React, { Component } from "react";

import { RangeDatepicker } from "chakra-dayzed-datepicker";

export default function Transaction(props) {
  const data = props.data;
  const dataItem = props.dataItem;
  // const [startDate, endDate] = dateRange;
  const [total, setTotal] = useState(0);
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalHargaProduct, setTotalHargaProduct] = useState(0);
  const [selectedDates, setSelectedDates] = useState([new Date(), new Date()]);
  // const dateFormatter = new Intl.DateTimeFormat("id", {
  //   day: "numeric",
  //   month: "numeric",
  //   year: "numeric",
  // });
  // const datefrom = dateFormatter.format(selectedDates[0]);
  // const dateend = dateFormatter.format(selectedDates[1]);

  useEffect(() => {
    console.log(data);
    if (data) {
      setTotal(
        data?.reduce((partialSum, product) => partialSum + product.total, 0)
      );
    }
  }, [data]);

  useEffect(() => {
    console.log(dataItem);
    if (dataItem) {
      setTotalProduct(
        dataItem?.reduce((partialSum, product) => partialSum + product.qty, 0)
      );
    }
  }, [dataItem]);

  useEffect(() => {
    console.log(dataItem);
    if (dataItem) {
      setTotalHargaProduct(
        dataItem?.reduce((partialSum, product) => partialSum + product.harga, 0)
      );
    }
  }, [dataItem]);

  useEffect(() => {
    console.log(total);
  }, [total]);
  useEffect(() => {
    console.log(totalProduct);
  }, [totalProduct]);
  useEffect(() => {
    console.log(totalHargaProduct);
  }, [totalHargaProduct]);
  useEffect(() => {
    // const m = moment(selectedDates[0]).format("YYYY-MM-DD");
    // console.log(m);
    console.log(selectedDates);
  }, [selectedDates]);
  return (
    <>
      <Center flexDir={"column"} className="table-trans">
        <Center flexDir={"row"} px={"20px"} py={"20px"} gap={5}>
          Date:
          <RangeDatepicker
            selectedDates={selectedDates}
            onDateChange={setSelectedDates}
          />
          <Button
            onClick={() => {
              props?.filter(selectedDates[0], selectedDates[1]);
              props?.filterpro(selectedDates[0], selectedDates[1]);
            }}
          >
            Filter
          </Button>
        </Center>
        <Flex>
          <Flex flexDir={"column"} className="table-trans">
            <Accordion defaultIndex={[0]} allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Flex className="table-trans">Transaction</Flex>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <TableContainer>
                    <Table variant="striped" colorScheme={"orange"}>
                      {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                      <Thead>
                        <Tr>
                          <Th>No Transaction</Th>
                          <Th>Tanggal Transaksi</Th>
                          <Th>Total Belanja</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {data?.map((product) => {
                          return (
                            <>
                              <Tr>
                                <Td>{product?.no_trans}</Td>
                                <Td>{product?.tgl}</Td>
                                <Td>Rp. {product?.total?.toLocaleString()}</Td>
                              </Tr>
                            </>
                          );
                        })}
                      </Tbody>
                      <Tfoot>
                        <Tr>
                          <Th>TOTAL</Th>
                          <Th></Th>
                          <Th isNumeric>Rp. {total.toLocaleString()}</Th>
                        </Tr>
                      </Tfoot>
                    </Table>
                  </TableContainer>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Accordion defaultIndex={[0]} allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Flex className="table-trans">Product</Flex>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <TableContainer className="table-trans">
                    <Table variant="striped" colorScheme="teal">
                      {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                      <Thead>
                        <Tr>
                          <Th>Nama Produk</Th>
                          <Th>Jumlah</Th>
                          <Th>Harga</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {dataItem?.map((product) => {
                          return (
                            <>
                              <Tr>
                                <Td>{product?.name}</Td>
                                <Td>{product?.qty}</Td>
                                <Td> Rp.{product?.harga.toLocaleString()}</Td>
                              </Tr>
                            </>
                          );
                        })}
                      </Tbody>
                      <Tfoot>
                        <Tr>
                          <Th>TOTAL</Th>
                          <Th> {totalProduct.toLocaleString()}</Th>
                          <Th isNumeric>
                            Rp. {totalHargaProduct.toLocaleString()}
                          </Th>
                        </Tr>
                      </Tfoot>
                    </Table>
                  </TableContainer>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Flex>
        </Flex>
      </Center>
    </>
  );
}
