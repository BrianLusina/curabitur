import React from "react";
import StyledTimestamp from "./StyledTimestamp";

type Props = {
    value: string,
    floatToRight: boolean
};

const Timestamp = ({ value, floatToRight}: Props) => (
    <StyledTimestamp floatToRight={floatToRight}>
        { value }
    </StyledTimestamp>
);

export default Timestamp;