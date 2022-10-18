import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Category } from "../../Models/Category"
import { TomatoButton } from "../Atoms/TomatoButton";

interface Props {
    categories: Category[];
    value: Category | null;
    onChange: (category: Category | null) => void;
}

const categoryBoxStyle = {
    paddingTop: "16px",
    "& button":  {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
}

export const CategorySelector = (props: Props) => {
    const [value, setValue] = useState<Category | null>(null);

    const onClick = (category: Category) => {
        setValue(category);
    };

    useEffect(() => {
        props.onChange(value);
    }, [value])

    return  <>
                {(props.categories || []).map(category => {
                    let isSelected = false;
                    if (category.id == value?.id) {
                        isSelected = true;
                    }

                    return <Box sx={categoryBoxStyle} key={category.id}> 
                                <TomatoButton  
                                        type={isSelected ? "active" : "inactive"}
                                        onClick={() => onClick(category)}>
                                    {category.name}
                                </TomatoButton>
                            </Box>
                })}
            </>
}