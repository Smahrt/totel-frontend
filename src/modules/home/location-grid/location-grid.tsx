import React from "react";
import AppGrid from "components/grid";
import LocationGridItem from "./location-grid-item";

interface LocationGridProps {
	locations: any;
	responsive: any;
	textStyle: string;
}

const LocationGrid: React.FC<LocationGridProps> = ({
  locations,
	responsive,
	textStyle,
}) => (
  <AppGrid
    delay={200}
    responsive={responsive}
    data={locations}
    renderRow={(item) => <LocationGridItem item={item} key={item.id} textStyle={textStyle}/>}
  />
);
export default LocationGrid;
