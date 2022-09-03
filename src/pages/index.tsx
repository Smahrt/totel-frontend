import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AppCard from "components/card";
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Card from "@mui/material/Card";
import Paper from '@mui/material/Paper';
import AppGridContainer from "components/grid-container";
import PropTypes from "prop-types";
import { alpha, Box } from "@mui/material";
import { Fonts } from "shared/constants/AppEnums";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";

import Header from "components/header";
import WrapHeader from "components/WrapHeader";
import WrapFooter from "components/WrapFooter";
import TravellerCard from "components/TravellerCard";
import TravelCard from "components/TravelCard";
import Locations from "modules/home/locations";
import SharedRoom from "modules/home/shared-room";
import LocationGrid from "modules/home/location-grid/location-grid";

import styles from "styles/Home.module.css";
import { homeHotels, homeRooms, homeTrips } from "./api/data";
import { fontSize } from "@mui/system";

import iconPlay from '../../public/img/icon/icon-big-play.svg';

// // BEGIN: Quick search Tabs of Hostels / Rooms / Tours
// function TabPanel(props: any) {
//   const { children, value, index, ...other } = props;

// export const getStaticProps = async () => {
//   // Fetching data from jsonplaceholder.
//   const res = await fetch(
//     'https://metoospace.herokuapp.com/api/v1/post');
//   let allPosts = await res.json();

//   // Sending fetched data to the page component via props.
//   return {
//       props: {
//           allPosts
//       }
//   }
// }

const typeLocationsData = [
	{ src: '/assets/images/romantic.jpeg', label: 'Romantic' },
	{ src: '/assets/images/adventure.jpeg', label: 'Adventure' },
	{ src: '/assets/images/nature.jpeg', label: 'Nature' },
	{ src: '/assets/images/wildlife.jpeg', label: 'Wildlife' },
	{ src: '/assets/images/solo.jpeg', label: 'Solo' },
]

const trendingLocationsData = [
	{ src: '/assets/images/miami.jpeg', label: 'Miami, Florida' },
	{ src: '/assets/images/california.jpeg', label: 'California' },
	{ src: '/assets/images/san-francisco.jpeg', label: 'San Francisco' },
	{ src: '/assets/images/boston.jpeg', label: 'Boston' },
]

export default function Home({ allPosts }: any) {
  // BEGIN: Quick search Tabs of Hostels / Rooms / Tours
  const [quickTabValue, setQuickTabValue] = React.useState(0);
  const [locationByType, setLocationByType] = React.useState(typeLocationsData);
  const [trendingLocations, setTrendingLocations] = React.useState(trendingLocationsData);

  return (
		<Box>
			<Header/>
			
			<Box
				sx={{
					pt:20,
					pb: 20,
					px: 20,
				}}
				>
				<SharedRoom/>
			</Box>

			<Box
				sx={{
					pb: 15,
					px: 20,
				}}
				>
				<Box
					component="h3"
					sx={{
						color: "text.primary",
						mb: { xs: 4, sm: 4, xl: 6 },
						fontSize: 20,
						fontWeight: Fonts.BOLD,
					}}
					>
					Find by type
				</Box>				

				<div>
					<Grid item xs={4} md={4}>
						<LocationGrid locations={locationByType} responsive={{ xs: 1, sm: 3, md: 4, xl: 5 }} textStyle="normal"/>
					</Grid>
				</div>
			</Box>

			<Box
				sx={{
					pb: 15,
					px: 20,
				}}
				>
				<Box
					component="h3"
					sx={{
						color: "text.primary",
						mb: { xs: 4, sm: 4, xl: 6 },
						fontSize: 20,
						fontWeight: Fonts.BOLD,
					}}
					>
					Trending Destinations
				</Box>				

				<Grid item xs={3} md={3}>
					<LocationGrid locations={trendingLocations} responsive={{ xs: 1, sm: 3, md: 4, xl: 4,}} textStyle="absolute"/>
				</Grid>
			</Box>

			<Box
				sx={{
					pb: 15,
					px: 20,
				}}
				>
				<Box
					component="h3"
					sx={{
						color: "text.primary",
						mb: { xs: 4, sm: 4, xl: 6 },
						fontSize: 20,
						fontWeight: Fonts.BOLD,
					}}
					>
					Trending Destinations
				</Box>							
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid item xs={12} md={3} sx={{ position: "relative"}}> 
						<Card
							sx={{
								borderRadius: '15px',
								// width: "100%",
								height: "500px",
								display: "flex",
								flexDirection: "column",
							}}
							>
							<img 
								src="/assets/images/grand-canyon-national-park.jpeg" 
								alt="Image" 
								width="auto"
								height="100%"/>
						</Card>
						<Box
							component="p"
							sx={{
								position: 'absolute',
								bottom: '20px',
								left: '28px',
							}}
							>
							<Box
								component="p"
								sx={{
									color: '#fff',
									fontSize: 20,
									fontWeight: Fonts.REGULAR
								}}
								>
								Grand Canyon National Park
							</Box>
							<Box
								component="p"
								sx={{
									color: '#fff',
									fontSize: 12,
									fontWeight: Fonts.REGULAR
								}}
								>
								Williams, AZ
							</Box>							
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box sx={{ flexGrow: 1 }} >
							<Grid container spacing={4} columns={12}>
								<Grid item xs={6} sx={{ position: "relative"}}>
									<Card
										sx={{
											borderRadius: '15px',
											// width: "100%",
											height: "242px",
											display: "flex",
											flexDirection: "column",
										}}
										>
										<img 
											src="/assets/images/utah-national-park.jpeg" 
											alt="Image" 
											width="auto"
											height="100%"/>
									</Card>
									<Box
										component="p"
										sx={{
											position: 'absolute',
											bottom: '20px',
											left: '28px',
										}}
										>
										<Box
											component="p"
											sx={{
												color: '#fff',
												fontSize: 20,
												fontWeight: Fonts.REGULAR
											}}
											>
											Utah National Parks
										</Box>	
										<Box
											component="p"
											sx={{
												color: '#fff',
												fontSize: 12,
												fontWeight: Fonts.REGULAR
											}}
											>
											California
										</Box>																															
									</Box>
								</Grid>
								<Grid item xs={6} sx={{ position: "relative"}}>
									<Card
										sx={{
											borderRadius: '15px',
											// width: "100%",
											height: "242px",
											display: "flex",
											flexDirection: "column",
										}}
										>
										<img 
											src="/assets/images/nature-2.jpeg" 
											alt="Image" 
											width="auto"
											height="100%"/>
									</Card>
									<Box
										component="p"
										sx={{
											position: 'absolute',
											bottom: '20px',
											left: '28px',
										}}
										>
										<Box
											component="p"
											sx={{
												color: '#fff',
												fontSize: 20,
												fontWeight: Fonts.REGULAR
											}}
											>
											Maui
										</Box>
										<Box
											component="p"
											sx={{
												color: '#fff',
												fontSize: 12,
												fontWeight: Fonts.REGULAR
											}}
											>
											Hawaii
										</Box>																																
									</Box>		
								</Grid>
								<Grid item xs={6} sx={{ position: "relative"}}>
									<Card
										sx={{
											borderRadius: '15px',
											// width: "100%",
											height: "242px",
											display: "flex",
											flexDirection: "column",
										}}
										>
										<img 
											src="/assets/images/nature-3.jpeg" 
											alt="Image" 
											width="auto"
											height="100%"/>
									</Card>
									<Box
										component="p"
										sx={{
											position: 'absolute',
											bottom: '20px',
											left: '28px',
										}}
										>
										<Box
											component="p"
											sx={{
												color: '#fff',
												fontSize: 20,
												fontWeight: Fonts.REGULAR
											}}
											>
											Utah National Parks
										</Box>
										<Box
											component="p"
											sx={{
												color: '#fff',
												fontSize: 12,
												fontWeight: Fonts.REGULAR
											}}
											>
											Wyoming
										</Box>																																	
									</Box>
								</Grid>
								<Grid item xs={6} sx={{ position: "relative"}}>
									<Card
										sx={{
											borderRadius: '15px',
											// width: "100%",
											height: "242px",
											display: "flex",
											flexDirection: "column",
										}}
										>
										<img 
											src="/assets/images/nature-4.jpeg" 
											alt="Image" 
											width="auto"
											height="100%"/>
									</Card>	
									<Box
										component="p"
										sx={{
											position: 'absolute',
											bottom: '20px',
											left: '28px',
										}}
										>									
										<Box
											component="p"
											sx={{
												color: '#fff',
												fontSize: 20,
												fontWeight: Fonts.REGULAR
											}}
											>
											Glacier National Park
										</Box>
										<Box
											component="p"
											sx={{
												color: '#fff',
												fontSize: 12,
												fontWeight: Fonts.REGULAR
											}}
											>
											Montana
										</Box>
									</Box>									
								</Grid>									
							</Grid>
						</Box>
					</Grid>
					<Grid item xs={12} md={3} sx={{ position: "relative"}}>
						<Card
							sx={{
								borderRadius: '15px',
								// width: "100%",
								height: "500px",
								display: "flex",
								flexDirection: "column",
							}}
							>
							<img 
								src="/assets/images/honolulu.jpeg" 
								alt="Image" 
								width="auto"
								height="100%"/>
						</Card>
						<Box
							component="p"
							sx={{
								position: 'absolute',
								bottom: '20px',
								left: '28px',
							}}
							>			
							<Box
								component="p"
								sx={{
									color: '#fff',
									fontSize: 20,
									fontWeight: Fonts.REGULAR
								}}
								>
								Honolulu
							</Box>
							<Box
								component="p"
								sx={{
									color: '#fff',
									fontSize: 12,
									fontWeight: Fonts.REGULAR
								}}
								>
								Hawaii
							</Box>													
						</Box>					
					</Grid>						
				</Grid>
			</Box>

      <Box
        sx={{
          pb: 15,
          px: 20,
          backgroundColor: "#F2F1F6"
        }}
        >
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Box>
              <Box
                component="h4"
                sx={{
                  fontSize: 20,
                  color: "#000",
                  fontWeight: Fonts.REGULAR,
                }}
                >
                How Easy to find the perfect Travel partner and Reduce travel expenses?
              </Box>
              <Box
                component="h4"
                sx={{
                  fontSize: 40,
                  color: "#000",
                  fontWeight: Fonts.BOLD
                }}
                >
                You Just 3 Steps Away
              </Box>
              <Box
                sx={{
                  pt: 4,
                  display: "flex",
                  alignItems: "center",
                }}
                >
                <Image src={iconPlay} alt="Play icon" />
                <Box
                  component="p"
                  sx={{
                    fontSize: 20,
                    color: '#657ADC',
                    fontWeight: Fonts.BOLD,
                    px:3,
                  }}
                  >
                  Watch Now
                </Box>                
              </Box>              
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box
              sx={{
                textAlign: "center"
              }}>
              <Image 
                src={'/img/post.png'} 
                alt="Create post icon" 
                width={117}
                height={145} />

              <Box
                component="p" 
                sx={{
                  fontSize: 18,
                  color: "#657ADC",
                  fontWeight: Fonts.BOLD
                }}>
                Create Post
              </Box>
              <Box
                component="p" 
                sx={{
                  fontSize: 14,
                  color: "#000",
                  fontWeight: Fonts.REGULAR
                }}>
                for sharing place or search for places and travellers
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box
              sx={{
                textAlign: "center"
              }}>
              <Image 
                src={'/img/patner.png'} 
                alt="Create post icon" 
                width={117}
                height={145} />
              <Box
                component="p" 
                sx={{
                  fontSize: 18,
                  color: "#657ADC",
                  fontWeight: Fonts.BOLD
                }}>
                Find Perfect Patner
              </Box>
              <Box
                component="p" 
                sx={{
                  fontSize: 14,
                  color: "#000",
                  fontWeight: Fonts.REGULAR
                }}>
                for sharing place or search for places and travellers
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box
              sx={{
                textAlign: "center"
              }}>
              <Image 
                src={'/img/post.png'} 
                alt="Create post icon" 
                width={117}
                height={145} />

              <Box
                component="p" 
                sx={{
                  fontSize: 18,
                  color: "#657ADC",
                  fontWeight: Fonts.BOLD
                }}>
                Save your Money
              </Box>
              <Box
                component="p" 
                sx={{
                  fontSize: 14,
                  color: "#000",
                  fontWeight: Fonts.REGULAR
                }}>
                for sharing place or search for places and travellers
              </Box>
            </Box>
          </Grid>         
        </Grid>
      </Box>

			{/* <div className={styles.section04_back}>
				<div className={styles.section04}>
					<div className={styles.section04_main}>
						<div className={styles.section04_text1}>How Easy to find the perfect Travel partner and Reduce travel expenses?</div>
						<div className={styles.section04_text_big}>You Just 3 Steps Away</div>
						<div className={styles.section04_watch_now}>
							<Image src={iconPlay} alt="Play icon" /> Watch Now
						</div>
					</div>
					<div className={styles.section04_create_post}>
						<div className={styles.section04_create_post_image}>
							<Image src={'/img/post.png'} alt="Create post icon" width={117}
								height={145} />
						</div>
						<div className={styles.section04_create_post_title}>Create Post</div>
						<div className={styles.section04_create_post_text}>
							for sharing place or search for places and travellers
						</div>
					</div>
					<div className={styles.section04_create_post}>
						<div className={styles.section04_create_post_image}>
							<Image src={'/img/patner.png'} alt="Create post icon" width={156}
								height={146} />
						</div>
						<div className={styles.section04_create_post_title}>Find Perfect Patner</div>
						<div className={styles.section04_create_post_text}>
							for sharing place or search for places and travellers
						</div>
					</div>
					<div className={styles.section04_create_post}>
						<div className={styles.section04_create_post_image}>
							<Image src={'/img/save_money.png'} alt="Create post icon" width={156}
								height={146} />
						</div>
						<div className={styles.section04_create_post_title}>Save your  Money</div>
						<div className={styles.section04_create_post_text}>
							for sharing place or search for places and travellers
						</div>
					</div>
				</div>
			</div> */}
			
			<div className={styles.section05}>
				<div className={styles.section05_content}>
					<div className={styles.section05_content_main}>
						<Image src={'/img/phone_show.png'} alt="Create post icon" width={324}
							height={404} />
					</div>
					<div className={styles.section05_content_text_area}>
						<div className={styles.section05_content_text_area_title}>
							Download totel app for best Experience
						</div>
						<div className={styles.section05_content_text_muted}>
							Available for free on these platforms
						</div>
						<div className={styles.section05_content_app_icons}>
							<div className={styles.section05_content_app_icons_img}>
								<Image src={'/img/apple_store.png'} alt="Create post icon" width={198}
									height={58} />
							</div>
							<div>
								<Image src={'/img/play_store.png'} alt="Create post icon" width={198}
									height={58} />

							</div>
						</div>

					</div>
				</div>
			</div>
		</Box>
  );
}
