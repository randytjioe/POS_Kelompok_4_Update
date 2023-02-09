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
  // const [startDate, endDate] = dateRange;
  const [total, setTotal] = useState(0);
  const [selectedDates, setSelectedDates] = useState([new Date(), new Date()]);
  useEffect(() => {
    console.log(data);
    if (data) {
      setTotal(
        data?.reduce(
          (partialSum, product) => partialSum + product.total_harga,
          0
        )
      );
    }
  }, [data]);

  useEffect(() => {
    console.log(total);
  }, [total]);
  return (
    <>
      <Flex flexDir={"column"} px="70px" py={"20px"} gap={5}>
        Date:
        <RangeDatepicker
          w={"60px"}
          selectedDates={selectedDates}
          onDateChange={setSelectedDates}
        />
        <Accordion defaultIndex={[0]} allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Flex px={"30px"}>Transaction</Flex>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <TableContainer>
                <Table variant="striped" colorScheme="teal">
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
                            <Td>{product?.no_transaction}</Td>
                            <Td>{product?.tgl_trans}</Td>
                            <Td>Rp. {product?.total_harga.toLocaleString()}</Td>
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
      </Flex>
    </>
  );
}
