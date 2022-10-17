import { Box, Divider, styled, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ToomatoSummary } from "../../Models/ToomatoSummary";
import { useAppStore } from "../../Store/AppStore";
import { Flex } from "../../Utils/Flex";
import {ReactComponent as TomatoColor} from "../Atoms/TomatoColor.svg"
import { SummaryList } from "./SummaryList";

const LogoTomato = styled(TomatoColor)({ height: "43px" });

const containerStyles = { marginRight: "10px" }

const SectionOfHome = (props: {children: React.ReactNode}) => {
    return <Box sx={{paddingTop: "16px", paddingBottom: "16px"}}>{props.children}</Box> 
};

const subTitlesStyles = { textTransform: "uppercase" };

export const HomeSummary = () => {
    const [todaySummary, setTodaySummary] = useState<ToomatoSummary[]>([]);
    const [weekSummary, setWeekSummary] = useState<ToomatoSummary[]>([]);

    let appStore = useAppStore();

    useEffect(() => {
        let todaySubscription = appStore.todaySummary.subscribe(value => setTodaySummary(value));
        let weekSubscription = appStore.weekSummary.subscribe(value => setWeekSummary(value));

        return () => {
            todaySubscription.unsubscribe();
            weekSubscription.unsubscribe();
        }
    }, []);

    return  <Box>
                <SectionOfHome>
                    <Flex type="packed">
                        <Box sx={containerStyles}>
                            <LogoTomato />
                        </Box>
                        <Box sx={containerStyles}>
                            <Typography variant="h5" color="text.secondary">Welcome</Typography>
                        </Box>
                        <Typography variant="h5">Marcello</Typography>
                    </Flex>
                </SectionOfHome>
                <SectionOfHome>
                    <Typography variant="body1" sx={subTitlesStyles} color="text.secondary">Today's Tomatoes</Typography>
                </SectionOfHome>
                <SectionOfHome>
                    <SummaryList summary={todaySummary}/>
                </SectionOfHome>
                <SectionOfHome>
                    <Divider />
                </SectionOfHome>
                <SectionOfHome>
                    <Typography variant="body1" sx={subTitlesStyles} color="text.secondary">Thi week's Tomatoes</Typography>
                </SectionOfHome>
                <SectionOfHome>
                    <SummaryList summary={weekSummary}/>
                </SectionOfHome>
            </Box>
};
